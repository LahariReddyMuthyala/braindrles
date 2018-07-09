
import numpy as np
import matplotlib

# matplotlib.use('agg')

from matplotlib import cm, colors, pyplot as plt
from os.path import join as pjoin, abspath, realpath, basename, dirname, exists as pexists
from os import makedirs
from skimage.util import pad
from visualqc.utils import read_id_list
from mrivis import Collage, SlicePicker
from mrivis.utils import read_image, crop_to_seg_extents
from mrivis.color_maps import get_freesurfer_cmap
import nibabel as nib
import traceback

contour_level = 0.5
color_for_label = [ 'red', '#b0ff9d', 'yellow',  'purple']
contour_line_width = 2
alpha_mri = 1.0
alpha_seg = 0.5
vis_type = 'labels_volumetric'
fs_cmap = get_freesurfer_cmap(vis_type)

min_cmap_range_t1_mri = 0
max_cmap_range_t1_mri = 1

fig_size = [12, 12]
img_format = 'png'

# in_dir = '/Users/liews/data/braindr_training/brains'
in_dir = '/Users/Reddy/Desktop/USC_stroke_brains'
out_dir = pjoin(in_dir, 'les_vis')
makedirs(out_dir, exist_ok=True)

## ls -1d c* > id_list

id_list_path = pjoin(in_dir, 'id_list')
id_list = read_id_list(id_list_path)
num_subjects = len(id_list)

def make_square(slice_mri):
    padX = max_shape - slice_mri.shape[0]
    padY = max_shape - slice_mri.shape[1]
    halfPadX = int(np.ceil(padX / 2))
    halfPadY =int(np.ceil(padY / 2))
    # print(((halfPadX, padX - halfPadX),
    #                                (halfPadY, padY - halfPadY)))
    slice_mri_pad = pad(slice_mri, ((halfPadX, padX - halfPadX),
                                    (halfPadY, padY - halfPadY)),
                        mode="constant")
    return slice_mri_pad

def plot_contours_in_slice(slice_seg, cur_ax, unique_labels):
    """Draws contours on MRI"""

    plt.sca(cur_ax)
    for index, label in enumerate(unique_labels):
        binary_slice_seg = slice_seg == label
        if not binary_slice_seg.any():
            continue
        ctr_h = plt.contour(binary_slice_seg,
                            levels=[contour_level, ],
                            colors=(color_for_label[index],),
                            linewidths=contour_line_width,
                            alpha=alpha_seg,
                            zorder=1)

    return

# """
for subject_index, subject_id in enumerate(id_list):

    # check if its already done
    scr_shot_exist = [ pexists(pjoin(out_dir, '{}_slice_{}.{}'.format(subject_id, idx, img_format))) for idx in range(5) ]
    if all(scr_shot_exist):
        continue

    try:
        t1_path = pjoin(in_dir, subject_id, '{}_{}.nii'.format(subject_id, 't1'))
        lesion_path = pjoin(in_dir, subject_id, '{}_{}.nii'.format(subject_id, 'AutoSeg_linda'))

        # img = nib.load(t1_path)
        # # print("image shape", img.shape)

        t1w = read_image(t1_path, None)
        max_shape = max(t1w.shape)
        lesion = read_image(lesion_path, None)
        lesion = lesion.astype('int')

        # casting to remove any negligible differences due to interpolation
        # removing background - 0 stays 0
        unique_labels = np.setdiff1d(np.unique(lesion.flatten()), 0)

        LesionSlicePicker = SlicePicker(lesion, view_set=[2, ], num_slices=5,
                                        min_density=0.0001)
        idx = 0
        for slice_mri, slice_seg in LesionSlicePicker.get_slices_multi([t1w, lesion]):
            slice_mri_pad = make_square(slice_mri)
            slice_seg_pad = make_square(slice_seg)
            slice_seg_pad = slice_seg_pad.astype('float')

            fig = plt.figure(figsize=fig_size)
            ax = plt.Axes(fig, [0., 0., 1., 1.])
            fig.add_axes(ax)

            #cur_ax = plt.gca()

            slice_seg_pad[slice_seg_pad==0] = np.nan
            ax.imshow(slice_mri_pad[::-1, :], cmap='gray', aspect=1)

            plot_contours_in_slice(slice_seg_pad[::-1, :], ax, unique_labels)

            # ax.imshow(slice_seg_pad[::-1, :], cmap='Reds', vmin=0, vmax=1.6,
            #           alpha=0.4, aspect=1)
            ax.set_axis_off()

            out_vis_path = pjoin(out_dir, '{}_slice_{}.{}'.format(subject_id, idx, img_format))
            fig.savefig(out_vis_path, format=img_format, dpi=max_shape)
            plt.close(fig)
            # print(out_vis_path)
            print('{} {}/{} - slice {} done'.format(subject_id, subject_index, num_subjects, idx + 1))
            idx += 1

    except:
        print("ERROR in processing {}".format(subject_id))
        traceback.print_exc()
        print('shapes:{}\t{}'.format(t1w.shape, lesion.shape))

    print('\tdone.')
    plt.close('all')

print('outputs are in {}'.format(out_dir))

# """
#
# from glob import glob
#
# image_files = glob(pjoin(out_dir,"*.png"))
# output = {}
#
# for im in image_files:
#     fname = im.split("/")[-1].replace(".png", "")
#     output[fname] = {"ave_score": 0, "num_votes": 0}
#
# import simplejson as json
#
# with open("manifest.json", "w") as f:
#     f.write(json.dumps(output))

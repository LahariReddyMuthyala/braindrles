
import numpy as np
import matplotlib
matplotlib.use('agg')
from matplotlib import cm, colors, pyplot as plt
from os.path import join as pjoin, abspath, realpath, basename, dirname, exists as pexists
from os import makedirs
from skimage.util import pad
from visualqc.utils import read_id_list
from mrivis import Collage, SlicePicker
from mrivis.utils import read_image
from mrivis.color_maps import get_freesurfer_cmap
import nibabel as nib

contour_level = 0.5
color_for_label = ['red', 'yellow', 'purple']
contour_line_width = 1
alpha_mri = 1.0
alpha_seg = 0.7
vis_type = 'labels_volumetric'
fs_cmap = get_freesurfer_cmap(vis_type)

min_cmap_range_t1_mri = 0
max_cmap_range_t1_mri = 1

fig_size = [1, 1]
img_format = 'png'

in_dir = '/Users/liews/data/braindr_training/brains'
out_dir = pjoin(in_dir, 'les_vis')
makedirs(out_dir, exist_ok=True)

## to make id_list, in directory run: ls -1d c* > id_list

id_list_path = pjoin(in_dir, 'id_list')
id_list = read_id_list(id_list_path)


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


for sid in id_list:
    try:
        t1_path = pjoin(in_dir, sid, '{}_{}.nii'.format(sid, 't1'))
        lesion_path = pjoin(in_dir, sid, '{}_{}.nii'.format(sid, 'AutoSeg_linda'))

        img = nib.load(t1_path)
        # print("image shape", img.shape)
        max_shape = max(img.shape)

        t1w = read_image(t1_path, None)
        lesion = read_image(lesion_path, None)

        LesionSlicePicker = SlicePicker(lesion, view_set=[2, ], num_slices=5)
        idx = 0
        for slice_mri, slice_seg in LesionSlicePicker.get_slices_multi([t1w, lesion]):


            slice_mri_pad = make_square(slice_mri)
            slice_seg_pad = make_square(slice_seg)

            fig = plt.figure(figsize=fig_size)
            ax = plt.Axes(fig, [0., 0., 1., 1.])
            fig.add_axes(ax)

            #cur_ax = plt.gca()

            slice_seg_pad[slice_seg_pad==0] = np.nan
            ax.imshow(slice_mri_pad[::-1, :], cmap='gray', aspect=1)
            ax.imshow(slice_seg_pad[::-1, :], cmap='Reds', vmin=0, vmax=1.6,
                      alpha=0.4, aspect=1)
            ax.set_axis_off()

            out_vis_path = pjoin(out_dir, '{}_slice_{}.{}'.format(sid, idx, img_format))
            fig.savefig(out_vis_path, format=img_format, dpi=max_shape)
            print(out_vis_path)
            idx += 1

    except ValueError:
        print(sid, "ERROR")


from glob import glob

image_files = glob(pjoin(out_dir,"*.png"))
import numpy as np

np.random.shuffle(image_files)
output = {}

for im in image_files:
    fname = im.split("/")[-1].replace(".png", "")
    output[fname] = {"ave_score": 0, "num_votes": 0}

import simplejson as json

with open("manifest.json", "w") as f:
    f.write(json.dumps(output))

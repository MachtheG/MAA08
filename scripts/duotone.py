"""Print a photograph in the site's two inks.

Every photograph on the site is a duotone made from the locked palette, so
replacement photography must go through this script too:

    python3 scripts/duotone.py land  in.jpg  public/images/wajir/out.jpg
    python3 scripts/duotone.py land  in.jpg  public/images/plates/affey-08.jpg --max 800

Recipes (shadow ink -> highlight ink, from src/styles/tokens.css):
    land   flag-green-deep #063c2b -> ochre-300 #e6c583   (every photograph on the site)
    plate  ink-900         #16130f -> sand-50   #f8f4ec   (neutral print; not used on the site)

Options:
    --crop-bottom F   drop the bottom fraction F of the frame (burned-in marks)
    --max W           longest edge in pixels (default 1920)
"""

import argparse

from PIL import Image, ImageOps

RECIPES = {
    "land": ((0x06, 0x3C, 0x2B), (0xE6, 0xC5, 0x83)),
    "plate": ((0x16, 0x13, 0x0F), (0xF8, 0xF4, 0xEC)),
}


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("recipe", choices=RECIPES)
    p.add_argument("src")
    p.add_argument("dst")
    p.add_argument("--crop-bottom", type=float, default=0.0)
    p.add_argument("--max", type=int, default=1920)
    a = p.parse_args()

    im = Image.open(a.src)
    im = ImageOps.exif_transpose(im).convert("L")
    if a.crop_bottom:
        im = im.crop((0, 0, im.width, round(im.height * (1 - a.crop_bottom))))
    im.thumbnail((a.max, a.max), Image.LANCZOS)
    # Stretch tones so every photo uses the full range between the two inks.
    im = ImageOps.autocontrast(im, cutoff=1)
    dark, light = RECIPES[a.recipe]
    ImageOps.colorize(im, black=dark, white=light).save(
        a.dst, quality=84, optimize=True, progressive=True
    )
    print(a.dst, im.size)


if __name__ == "__main__":
    main()

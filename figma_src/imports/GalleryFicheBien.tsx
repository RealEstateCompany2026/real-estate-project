import imgRectangle21 from "figma:asset/ea149919048c49c233547426cab6a80f99a70e99.png";
import imgRectangle22 from "figma:asset/fe5b53ca8a5da70fa46d1ac005bde7c58dc2fd2c.png";
import imgRectangle23 from "figma:asset/bf9fbb324551f3970ab08000b5fdf2c776660973.png";
import { Button } from "../app/components/atoms/Button";
import { Image as ImageIcon } from "lucide-react";

export default function GalleryFicheBien() {
  return (
    <div className="relative size-full" data-name="Gallery . FicheBien">
      <div className="absolute h-[277px] left-0 rounded-bl-[16px] rounded-tl-[16px] top-0 w-[412px]">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-bl-[16px] rounded-tl-[16px] size-full" src={imgRectangle21} />
      </div>
      <div className="absolute h-[277px] left-[414px] top-0 w-[412px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle22} />
      </div>
      <div className="absolute h-[277px] left-[828px] top-0 w-[363px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-7.89%] max-w-none top-0 w-[129.08%]" src={imgRectangle23} />
        </div>
      </div>
      <div className="absolute left-[1067px] top-[20px]">
        <Button variant="default" iconRight={<ImageIcon size={20} />}>
          Galerie
        </Button>
      </div>
    </div>
  );
}
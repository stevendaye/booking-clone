import { GoThumbsup } from "react-icons/go";

export const PhotosHints = () => {
  return (
    <div className="rounded-lg border-solid border-[1px] w-72 p-5 h-min">
      <div className="flex gap-2">
        <div>
          <GoThumbsup size={30} />
        </div>

        <div className="flex flex-col gap-3">
          <h5 className="font-bold">
            What if I don't have professional photos?
          </h5>
          <p className="text-sm mb-2">
            No problem! You can use a smartphone or a digital camera.Here are
            some tips for taking great photos of your property.
          </p>
          <p className="text-sm">
            If you don't know who took a photo, it's best not to use it. Only
            use photos others have taken if you have permission.
          </p>
        </div>
      </div>
    </div>
  );
};

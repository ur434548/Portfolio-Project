import Button from "./Button";
import html from "../assets/images/html.png";
import { GrLinkPrevious } from "react-icons/gr";
const UpdateSkillForm = ({
  formTitle,
  titleLabel,
  proficiencyLabel,
  descriptionLabel,
  svgLabel,
  text,
  showPic,
  EndLabel,
  selectProjects,
  showProject,
  company
}) => {
  return (
    <div className="bg-white shadow-md  rounded-2xl p-4 mx-3 h-[50.6rem]">
      <form className="p-6 bg-white rounded-lg max-w-2xl mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl uppercase font-600 mb-4">{formTitle}</h2>
          <GrLinkPrevious size={20} className="mr-[5px]  md:mt-0" />
        </div>

        <label className="block  text-base font-sans text-gray-700">
          {titleLabel}
        </label>
        <input
          type="text"
          className="w-full mt-2 mb-4 p-2 border border-gray-300 rounded-lg"
        />

        {company? ( <><label className="block text-base font-sans text-gray-700">
          {proficiencyLabel}
        </label>
        <input
          type="number"
          className="w-full mt-2 mb-4 p-2 border border-gray-300 rounded-lg"
        /></>):(<p></p>)}

        <label className="block text-base font-sans text-gray-700">
          {descriptionLabel}
        </label>
        <textarea className="w-full mt-2 mb-4 p-2 border border-gray-300 rounded-lg h-24"></textarea>

        <label className="block text-base font-sans text-gray-700">
          {svgLabel}
        </label>
        {showPic ? (
          <div className="w-full mt-2 mb-4 p-2 mx-auto border border-dotted border-gray-300 rounded-lg h-40 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-2">
            <img src={html} alt="Pic" className="w-16 md:w-20 pl-0 md:pl-5" />
            <input type="file" className="w-full md:w-auto" />
          </div>
        ) : (
          <div>
            <input
              type="text"
              className="w-full mt-2 mb-4 p-2 border border-gray-300 rounded-lg"
            />
            <label className="block text-base font-sans text-gray-700">
              {EndLabel}
            </label>
            <input
              type="text"
              className="w-full mt-2 mb-4 p-2 border border-gray-300 rounded-lg"
            />
          </div>
        )}
       {showProject? (<div>
          <label className="block text-base font-sans text-gray-700">
            {selectProjects}
          </label>

          <select
            name="Select Projects"
            className="w-full mt-2 mb-4 p-2 border border-gray-300 rounded-lg"
          >
            <option value="Abc">Abc</option>
            <option value="Abc">Abc</option>
            <option value="Abc">Abc</option>
            <option value="Abc">Abc</option>
            <option value="Abc">Abc</option>
            <option value="Abc">Abc</option>
          </select>
        </div>) : (<p></p>)}

        <div className="flex justify-end mt-4">
          <Button
            text={text}
            className="h-10 px-5 rounded-2xl w-full md:w-auto"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateSkillForm;

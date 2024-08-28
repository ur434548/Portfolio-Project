import React, { useState } from 'react';
import Button from './Button';

const UpdateSkillForm = ({
  formTitle = "UPDATE SKILL",
  titleLabel = "Title",
  proficiencyLabel = "Proficiency",
  descriptionLabel = "Description",
  svgLabel = "Skill Svg",
  buttonLabel = "UPDATE SKILL",
  initialTitle = "",
  initialProficiency = "",
  initialDescription = "",
  initialSvg = null,
  onUpdateSkill
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [proficiency, setProficiency] = useState(initialProficiency);
  const [description, setDescription] = useState(initialDescription);
  const [svg, setSvg] = useState(initialSvg);

  const handleSvgUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSvg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateSkill({ title, proficiency, description, svg });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">{formTitle}</h2>
      
      <label className="block text-sm font-medium text-gray-700">{titleLabel}</label>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        className="w-full mt-2 mb-4 p-2 border border-gray-300 rounded-lg"
      />

      <label className="block text-sm font-medium text-gray-700">{proficiencyLabel}</label>
      <input 
        type="number" 
        value={proficiency} 
        onChange={(e) => setProficiency(e.target.value)} 
        className="w-full mt-2 mb-4 p-2 border border-gray-300 rounded-lg"
      />

      <label className="block text-sm font-medium text-gray-700">{descriptionLabel}</label>
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        className="w-full mt-2 mb-4 p-2 border border-gray-300 rounded-lg h-24"
      ></textarea>

      <label className="block text-sm font-medium text-gray-700">{svgLabel}</label>
      <div className="mt-2 mb-4 p-4 border border-dashed border-gray-300 rounded-lg text-center">
        {svg ? (
          <img src={svg} alt="Skill Svg" className="mx-auto mb-2" style={{ maxWidth: '100px' }} />
        ) : (
          <p className="text-sm text-gray-500">Upload a file<br/>PNG, JPG, GIF up to 10MB</p>
        )}
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleSvgUpload} 
          className="mt-2"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-purple-500 text-white p-2 rounded-lg"
      >
        {buttonLabel}
      </Button>
    </form>
  );
};

export default UpdateSkillForm;

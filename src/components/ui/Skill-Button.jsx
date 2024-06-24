function SkillButton({ src, title, color }) {
  return (
    <div
      data-aos="flip-right"
      data-aos-duration="1000"
      className="skill__button"
    >
      <img className="skill__img" src={src} alt="" />
      <p className={`skill__title ${color}`}>{title}</p>
    </div>
  );
}

export default SkillButton;

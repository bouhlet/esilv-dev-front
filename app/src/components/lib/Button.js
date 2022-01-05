function Button({variant = "squared", style = {}, title, onClick}) {
  //if(!props.style) props.style ={};
  //props.style = props.style ? props.style.style : {};
  //props.style = props.style ?? {};
  //props.style ??={};
  //const {variant, style, onClick, title} = props;

  switch (variant) {
    case 'squared' :
      style.borderRadius=0;
      break;

    case 'rounded' :
      style.borderRadius=5;
      break;
    
    case  'round' :
      style.borderRadius="50%";
      break;
      
    default:
      style.borderRadius="27%";
      break;
  }
  return(
    <button onClick={onClick} style={style}>
    {title}
  </button>
  );
}

export default Button;

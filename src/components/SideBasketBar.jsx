import { TbChecklist } from "react-icons/tb";
const SideBasketBar = ({state}) => {
  return (
    <div>
      <div>
        <TbChecklist />
        <p>Total :</p>
        <span>{state.total}</span>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default SideBasketBar;
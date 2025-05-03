import {
  CardBody,
  CardBodyContent,
  CardBodyHeader,
  CardBodyHours,
  CardBodyUser,
  CardContainer,
  CardHeader,
  CardHeaderIcons,
  CardHeaderTitle,
} from "./styled";
import TrashIcon from "../../assets/Trash.png";

export default function Card() {
  return (
    <CardContainer>
      <CardHeader>
        <CardHeaderTitle>My First Post at CodeLeap Network!</CardHeaderTitle>
        <CardHeaderIcons src={TrashIcon} />
        <CardHeaderIcons src={TrashIcon} />
      </CardHeader>
      <CardBody>
        <CardBodyHeader>
          <CardBodyUser>@Victor</CardBodyUser>
          <CardBodyHours>25 minutes ago</CardBodyHours>
        </CardBodyHeader>
        <CardBodyContent>
          Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum
          elit. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula
          mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis
          lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus
          feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
          lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
        </CardBodyContent>
      </CardBody>
    </CardContainer>
  );
}

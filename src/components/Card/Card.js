import { AiOutlineEdit} from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

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
  CardIconsContainer,
} from "./styled";
import { useState } from "react";
import EditModal from "../Edit/EditModal";

export default function Card() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  return (
    <CardContainer>
      <CardHeader>
        <CardHeaderTitle>My First Post at CodeLeap Network!</CardHeaderTitle>
        <CardIconsContainer>
          <CardHeaderIcons><MdDeleteForever/></CardHeaderIcons>
          <CardHeaderIcons onClick={handleEditClick}><AiOutlineEdit/></CardHeaderIcons>
        </CardIconsContainer>
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
          mattis placerat. Duis vel nibh at velit scelerisque suscipit.<br/><br/>
          Duislobortis massa imperdiet quam. Aenean posuere, tortor sed cursus
          feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
          lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
        </CardBodyContent>
      </CardBody>
      {isModalOpen && (
        <EditModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </CardContainer>
  );
}

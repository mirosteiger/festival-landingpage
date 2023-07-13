import { Description, H2, Spacer } from "GlobalStyles"
import { Backdrop, CloseButton, ModalContainer, ModalHeader } from "./styled.modal"
import { YoutubeEmbed } from "./YoutubeEmbed"
import { IoIosCloseCircleOutline } from "react-icons/io"

export const Modal = (props: any) => {

    const { data, showModal } = props

    return (
        <Backdrop >
            <ModalContainer>
                <ModalHeader>
                    <div style={{width: "2.5rem", padding:"1rem"}}></div>
                    <H2 $color="black">{data.name}</H2>
                    <CloseButton onClick={showModal}>
                        <IoIosCloseCircleOutline size={"2.5rem"} />
                    </CloseButton>
                </ModalHeader>
                <Spacer size="2rem" />
                <Description $color="black">{data.description}</Description>
                <Spacer size="5rem" />
                <YoutubeEmbed embedId={data.embedId} />
            </ModalContainer>
        </Backdrop>
    )
}
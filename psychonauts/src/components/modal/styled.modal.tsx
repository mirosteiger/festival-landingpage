import { styled } from "styled-components";

export const Backdrop = styled.div`
    position: fixed;
    top:0;
    left: 0;
    width: 100vw;
    height:100vh;
    background-color: rbga(0,0,0,0.3);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: center;
    text-align: center;
`

export const ModalContainer = styled.div`
    background-color: #e2e2e2;
    margin: 9rem;
    border-radius: 10px;
    overflow-y: scroll;
    padding: 3rem 5rem;
    z-index: 50;
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
`
export const CloseButton = styled.div`
    color: black;
    padding: 1rem;
    cursor: pointer;    
`

export const VideoWrapper = styled.div`
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
    display: flex;
    justify-content: center;
    text-align: center;
`

export const YoutubeIframe = styled.iframe`
    top: 0;
    height: 80%;
    width: 80%;
    position: absolute;
    border-radius: 10px;
`
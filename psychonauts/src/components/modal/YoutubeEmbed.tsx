import { VideoWrapper, YoutubeIframe } from "./styled.modal";

export const YoutubeEmbed = ({ embedId }: any) => (
    <VideoWrapper>
        {/* Throws CORS Error in console, seems like you have to sign up and use the official Youtube API. 
        Won't do that for now, seems to be working */}
        <YoutubeIframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </VideoWrapper>
);
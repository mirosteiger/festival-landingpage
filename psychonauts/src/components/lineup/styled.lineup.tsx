import styled from "styled-components"

export const GalleryWrapper = styled.div`
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }
`

export const CardWrapper = styled.ul`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    border: red solid 1px;
`

export const CardItem = styled.li`
    display: flex; 
    justify-content: center;
    text-align: center;
    padding: 1rem;
    width: 100%;
    border: green dashed 1px;
`

export const Card = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

export const CardTitle = styled.h2`
    color: #2e2e2e;
    font-size: 1.1rem;
    letter-spacing: 1px;
    text-transform: capitalize;
    margin: 0px;
`
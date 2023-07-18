import { styled } from "styled-components";

export const CardWrapper = styled.div<{ $debug?: boolean }>`
    border: 2px solid #e2e2e2;
    width: 60rem;
    height: 7rem;
    border-radius: 10px;
    margin-bottom: 2rem;
    display:flex;
    justify-content: space-between;
    text-align: left;
    align-items: center;
    font-family: Open Sans, sans-serif;
    padding: 2rem 3rem;
`


export const BuyButton = styled.button`
    border-radius: 5px;
    border: 1px #e2e2e2 solid;
    padding: 15px 50px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: transparent;
    color: #e2e2e2; 
    &:hover {
        font-weight: 600;
        transform: scale(1.05);
        box-shadow: 3px 3px 10px #666, -3px 3px 10px #666;
    }
`

export const Divider = styled.span`
    border: 1px solid #e2e2e2;
    height: 160%;
`

export const Category = styled.div`
    width: 30%;
`

export const PriceContainer = styled.div`
    width: 50%;
    text-align: center;
`

export const PriceTag = styled.p`
    font-size: 2.5rem;
    font-weight: 600;
`

export const CartBtn = styled.a`
    color: white;
    text-decoration: none;
    position: relative;
    display: inline-block;
    cursor: pointer;
    `
    
    export const Amount = styled.span`
    position: absolute;
    top: -10px;
    right: 10px;
    padding: 1px 8px;
    border-radius: 50%;
    color: #2e2e2e;
    font-size: 0.8rem;
    background-color: rgb(233, 184,112);
`
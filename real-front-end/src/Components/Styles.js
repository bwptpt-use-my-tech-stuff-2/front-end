import styled, { css } from 'styled-components';


//Global Styles----------------------------------------

export const StyledContainer = styled.div`
    width: 375px;
    margin: 15px;
    margin: 0 auto;
`;

export const StyledInput = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 1.5px solid gray;
    border-radius: 4px;
`;


// landing page -----------------------------------------

export const LandingStyledContainer = styled.div`
    width: 375px;
    margin: 15px;
    margin: 0 auto;
    text-align: left;
`;

export const UniversalH1 = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    margin: 84px 0px 32px 0px;
    text-align: center;
`;

export const MissionStatementContainer = styled.div`
    margin: 100px 0px 60px 0px;
`;

export const UniversalH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    line-height: 29px;
`;

export const UniversalH3 = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
`;

export const UniversalP = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
`;

export const LandingSignUpButton = styled.button`
    width: 343px;
    height: 56px;
    margin: 120px 0px 20px 0px;
    color: white;
    font-size: 1em;
    font-weight: bold;
    background: rgba(237, 85, 59, 0.8);
    border-radius: 6px;

    :hover {
        color: white;
        background: rgba(237, 85, 59, 0.4);;
    }
`;

export const LandingSignInButton = styled.button`
    width: 343px;
    height: 56px;
    color: rgba(237, 85, 59, 0.8);
    font-size: 1em;
    font-weight: bold;
    background: white;
    border-radius: 6px;
    border: 3px solid rgba(237, 85, 59, 0.8);

    :hover {
        color: white;
        background: rgba(237, 85, 59, 0.4);
    }
`;

export const LandingButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
`;


// Sign in page ----------------------------------------


export const SignInH1 = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    margin: 84px 0px 32px 0px;
`;

export const StyledLabelSpan = styled.span`
    text-align: left;
`;

export const SignInSignInButton = styled.button`
    width: 343px;
    height: 44px;
    color: black;
    background: rgba(237, 85, 59, 0.4);
    border: 2px solid gray;
    border-radius: 12px;
    margin-top: 300px;

    :hover {
        color: white;
        background: rgba(237, 85, 59, 0.8);
    }
`;


//Sign up Page ----------------------------------------

export const SignUpSubmitButton = styled.button`
    width: 343px;
    height: 44px;
    color: black;
    font-size: 1em;
    font-weight: bold;
    background: rgba(237, 85, 59, 0.4);
    border: 2px solid gray;
    border-radius: 12px;
    margin-top: 100px;

    :hover {
        color: white;
        background: rgba(237, 85, 59, 0.8);
    }
`;

export const SignUpH1 = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    margin: 84px 0px 64px 0px;
    text-align: center;
`;

//AddListing Page ----------------------------------------

export const AddListingStyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 375px;
    margin: 15px;
    margin: 0 auto;
    text-align: left;
`;

export const AddListingH1 = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    margin: 84px 0px 32px 0px;
    text-align: center;
`;


//ItemsListed Page ----------------------------------------


export const ItemsListedH1 = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    margin: 64px 0px 32px 0px;
    text-align: center;
`;

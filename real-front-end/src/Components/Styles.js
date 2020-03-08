import styled, { css } from 'styled-components';


//Global Styles----------------------------------------


export const StyledContainer = styled.div`
    width: 375px;
    margin: 15px 15px 80px 15px;

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

export const ItemsListedH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 22px;
    text-align: left;
    margin-left: 20px;
`;

export const ItemsListedH3 = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: .85em;
    margin: 5px 0px 5px 0px;
`;

export const ItemsListedP = styled.p`
    font-family: 'Roboto', sans-serif;
    color: gray;
    font-size: 12px;
    margin: 0px 0px 5px 0px;
`;

export const StyledImg = styled.img`
    width: 80%;
    max-height: 160px;
	border-radius: 8px 8px 0px 0px;
`;

export const ContentCard = styled.div`
    width: 220px;
    display: flex;
    justify-content: center;
    text-align: left;
    margin: 20px;
`;

export const ItemListRentButton = styled.button`
    width: 85px;
    height: 20px;
    color: white;
    font-size: .75em;
    background: rgba(32, 99, 155, 0.8);
    border: 1px solid gray;
    border-radius: 6px;

    :hover {
        color: white;
        background: rgba(32, 99, 155, 0.8);
        opacity: 65%;
    }
`;


//NavBar Page ----------------------------------------


export const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 80px;
    background-color: white;
    /* position: fixed; */
`;

export const NavCard = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    text-align: center;
`;

export const StyledIcon = styled.div`
    margin-bottom: 5px;
`;

export const StyledNavLink = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    color: black;
`;


//Profile Page ----------------------------------------


export const ProfileImg = styled.img`
    max-width: 200px;
    border-radius: 50%;
`;

export const ProfileP = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    margin-top: 10px;
`;

export const ProfileButtonContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    margin: 0 auto;
    flex-direction: column;
`;

export const ProfilePageButton = styled.button`
    width: 100%;
    height: 44px;
    color: white;
    font-size: 1em;
    font-weight: bold;
    background: rgba(32, 99, 155, 0.8);
    border: 2px solid gray;
    border-radius: 8px;
    margin-top: 40px;

    :hover {
        opacity: 65%;
        background: rgba(32, 99, 155, 0.8);
    }
`;
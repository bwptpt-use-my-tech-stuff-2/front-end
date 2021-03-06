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
    margin: 54px 0px 32px 0px;
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
    margin: 54px 0px 32px 0px;
`;

export const StyledLabelDiv = styled.div`
    text-align: left;
`;

export const SignInSignInButton = styled.button`
    width: 343px;
    height: 44px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 1em;
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


//SignUpWith Page ----------------------------------------


export const SignUpWithButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

//SignUpH1 used here


export const SignUpWithFacebookButton = styled.button`
    width: 343px;
    height: 64px;
    color: white;
    font-size: 1em;
    font-weight: bold;
    background: #3D5A98;;
    border: 1px solid white;
    border-radius: 6px;
    margin: 20px;
    padding-bottom: 15px;

    :hover {
        opacity: 70%;
    }
`;

export const SignUpWithFacebookButtonImg = styled.img`
    width: 40px;
    margin-right: 20px;
`;

export const SignUpWithGoogleButton = styled.button`
    width: 343px;
    height: 64px;
    color: black;
    font-size: 1em;
    font-weight: bold;
    background: #E9E9E9;
    border: 1px solid white;
    border-radius: 6px;
    margin: 20px;
    padding-bottom: 10px;

    :hover {
        opacity: 70%;
    }
`;

export const SignUpWithGoogleButtonImg = styled.img`
    width: 25px;
    margin-right: 20px;
`;

export const SignUpWithEmailButton = styled.button`
    width: 343px;
    height: 64px;
    color: white;
    font-size: 1em;
    font-weight: bold;
    background: rgba(237, 85, 59, 0.8);
    border: 1px solid white;
    border-radius: 6px;
    margin: 20px;
    padding-bottom: 20px;

    :hover {
        opacity: 70%;
    }
`;

export const SignUpWithEmailButtonImg = styled.img`
    width: 40px;
    margin-right: 20px;
`;

//Sign up Page ----------------------------------------


export const SignUpH1 = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    margin: 54px 0px 64px 0px;
    text-align: center;
`;

export const SignUpSubmitButton = styled.button`
    width: 100%;
    height: 44px;
    color: black;
    font-size: 1em;
    font-weight: bold;
    background: rgba(237, 85, 59, 0.4);
    border: 1px solid gray;
    border-radius: 12px;
    margin-top: 60px;

    :hover {
        color: white;
        background: rgba(237, 85, 59, 0.8);
    }
`;


//AddListing Page ----------------------------------------


export const AddListingStyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 375px;
    margin: 15px 15px 80px 15px;
    padding-bottom: 100px;
    margin: 0 auto;
    text-align: left;
`;

// export const AddItemImg = styled.img`
//     display: flex;
//     justify-content: center;
//     align-content: center;
//     width: 200px;
//     align-content: center;
//     max-height: 160px;
// 	border-radius: 8px 8px 0px 0px;
// `;

export const AddListingH1 = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    margin: 36px 0px 8px 0px;
    text-align: center;
`;

export const AddItemP = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
`;

export const AddItemInput = styled.input`
    width: 90%;
    height: 25px;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 1.5px solid gray;
    border-radius: 4px;
`;

export const CategoryButton = styled.button`
    width: 85px;
    height: 30px;
    margin: 10px 0px 10px 0px;
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

//AddItemCategoryModalStyles----------------------------------------


export const SelectCategoryModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    margin: 0 auto;
    text-align: center;
`;

export const CategoryModalH1 = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    margin: 12px 0px 8px 0px;
    text-align: center;
`;

export const CategoryModalH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    margin: 8px 0px 8px 0px;
    text-align: center;
`;


export const CategoryModalButton = styled.button`
    width: 50%;
    height: 30px;
    margin: 10px 0px 10px 0px;
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


//ItemsListed Page ----------------------------------------


export const ItemsListedH1 = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    margin: 54px 0px 32px 0px;
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


//RentItem Page ----------------------------------------


export const RentItemContainer = styled.div`
    width: 375px;
    margin: 0 auto;
`;

export const RentItemTextContainer = styled.div`
    width: 330px;
    margin: 0 auto;
`;

export const RentItemImg = styled.img`
    margin: 20px 0px 20px 0px;
    width: 330px;
    max-height: 230px;
    border-radius: 10px;
`;

export const RentItemH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 30px;
    text-align: left;
`;

export const RentItemH3 = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: .85em;
    margin: 10px 0px 10px 0px;
    text-align: left;
`;

export const RentItemDiv = styled.div`
    width: 80%;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    color: gray;
    font-size: .80em;
    text-align: left;
    padding: 20px 0px 20px 0px;
`;

export const RentNowButton = styled.button`
    width: 90%;
    height: 30px;
    margin: 10px 0px 10px 0px;
    color: white;
    font-size: .85em;
    font-weight: bold;
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

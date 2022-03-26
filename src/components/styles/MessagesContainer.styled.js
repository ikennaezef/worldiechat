import styled from 'styled-components';

export const MessagesContainer = styled.div`
    max-width: 50rem;
    padding: 0 1rem;
    margin: 7rem auto 3rem;
    overflow-y: scroll;
    margin-bottom: 5rem;

    ::-webkit-scrollbar {
        background-color: #ddd;
        width: 0.4rem;
        border-radius: 0.3rem;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #bbb;
        width: 0.4rem;
        border-radius: 0.3rem;
    }


    @media (max-width: 500px) {
        margin: 5rem auto 3rem;
    }

    @media (min-width: 1400px) {
        max-width: 60rem;
    }
`;
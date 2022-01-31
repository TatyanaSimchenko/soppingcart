import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justifi-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid lightblue;
    border-radius: 20px;
    height: 100%;

button {
    border-radius: 0 0 20px 20px;
}

.title {
    height: 65px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
}

.description {
    height: 110px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
}

img {
    object-fit: contain;
    margin: 15px;
    height: 200px;
    border-radius: 20px 20px 0 0;
}

div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
}
`;
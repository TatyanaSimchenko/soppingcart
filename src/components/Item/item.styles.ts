import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 90%;
    border: 1px solid lightblue;
    border-radius: 4px;
    height: 100%;

button {
    border-radius: 0 0 4px 4px;
}

.title {
    height: 65px;

}

.title,
.description {
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
}

.description {
    height: 110px;
}

.price {
    padding-left: 15px;
}

img {
    object-fit: contain;
    margin: 15px;
    height: 200px;
    border-radius: 4px 4px 0 0;
}

div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 30px;
    height: 100%;
}
`;
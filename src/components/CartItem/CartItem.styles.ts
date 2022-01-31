import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
justyfy-content: space-between;
font-family: Arial, Helvetica, sans-serif;
border: 1px solid lightblue;
padding-bottom: 20px;
margin-bottom: 15px;

h3 {
    padding-left: 10px;
}

div {
    flex: 1;
    padding: 10px;
}

.information,
.buttons {
    display: flex;
    justify-content: space-between;
}

img {
    max-width: 80px;
    object-fit: cover;
    margin: 20px 40px;
}
`;
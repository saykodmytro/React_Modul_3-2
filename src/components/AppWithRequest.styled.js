import styled from 'styled-components';
export const StyledAppWithRequest = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  .postsList {
    list-style: none;
    padding: 0;
  }

  .postListItem {
    padding: 20px;
    border: 2px solid black;
    margin-bottom: 25px;
    width: 450px;
    cursor: pointer;
  }

  .itemTitle {
    margin-top: 0;
    margin-bottom: 15px;
  }

  .itemBody {
    margin-top: 0;
    margin-bottom: 0;
  }

  .error-bage {
    padding: 25px;
    border: 1px solid blue;
    background-color: orange;
    margin-bottom: 20px;
    font-size: 20px;
  }

  .list-wraper {
    display: flex;
    gap: 20px;
  }

  .commens-list {
    list-style: none;
    padding: 0;
    position: relative;
    position: sticky;
    top: 15px;
    max-height: 100vh;
    overflow: overlay;
  }

  .commentsListItem {
    padding: 20px;
    border: 2px solid grey;
    margin-bottom: 25px;
    width: 450px;
  }

  .commentTitle {
    margin-top: 0;
    margin-bottom: 15px;
  }

  .commentEmail {
    margin-top: 0;
    margin-bottom: 15px;
  }

  .commentBody {
    margin-top: 0;
    margin-bottom: 0;
  }

  .container-loader {
    position: fixed;
    top: 20px;
    right: 20px;
  }
`;

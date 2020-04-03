import Layout  from '../components/Layout.js';
import ReduxDemo  from '../components/ReduxDemo.js';
import styled from "styled-components";

class Home extends React.Component {
  render() {

      const Rocket = styled.div`
  text-align: center;
  img {
    width: 630px;
  }
`;
     return (
        <Rocket>
        <Layout>
           <h1>This is Homepage</h1>
           <ReduxDemo></ReduxDemo>
            <img src="https://media.giphy.com/media/QbumCX9HFFDQA/giphy.gif" />

        </Layout>

        </Rocket>
     );
  }
}
export default Home;

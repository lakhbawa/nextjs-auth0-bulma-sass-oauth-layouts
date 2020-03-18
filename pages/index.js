import Layout  from '../components/Layout.js';
import ReduxDemo  from '../components/ReduxDemo.js';

class Home extends React.Component {
  render() {
     return (
        <div>
        
        <Layout>
           <h1>This is Homepage</h1>
           <ReduxDemo></ReduxDemo>
        </Layout>
           
        </div>
     );
  }
}
export default Home;
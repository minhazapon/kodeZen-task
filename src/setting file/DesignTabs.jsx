
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const DesignTabs = () => {


    return (
        <div>
            <div className=' kzui-designTabs '>


             <div>
             <Tabs>
             <TabList>
             <Tab>Color</Tab>
             <Tab>Typography</Tab>
             <Tab>Shadow</Tab>
             </TabList>
             <TabPanel>
             <h2>Any content 1</h2>
             </TabPanel>
             <TabPanel>
             <h2>typography is not available</h2>
             </TabPanel>
             <TabPanel>
             <h2>Shadow is not available</h2>
             </TabPanel>
             </Tabs>      
             </div>  


             <div className=' kzui-search '>

                <input className='kzui-search-input' type="search" name="search" placeholder='Search' id="" />  
                <img  src="https://cdn-icons-png.flaticon.com/128/13859/13859430.png" alt="" height="25px" /> 
                
             </div>          
 

            </div>
            
        </div>
    );
};

export default DesignTabs;
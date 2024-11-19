This project was developed and submitted to the **International Track of the Presidential Hackathon 2024**, hosted by the Ministry of Digital Affairs in Taiwan.

A team comprising Dr. Huw Whitworth (from Cranfield University) and several PhD students from the Open University collaborated to co-create solutions for smart agriculture, aligning with this year’s theme, "Digital and Green."

An integrated approach to managing data across these diverse groups bridges the information gap, supporting both traditional and innovative farmers as they adapt to evolving agricultural landscapes. To this end, we have developed a holistic system that aligns with six of the 17 United Nations Sustainable Development Goals (SDGs), namely SDG2 (_Zero Hunger_), SDG3 (_Good Health and Well-Being_), SDG7 (_Affordable and Clean Energy_), SDG10 (_Reduced Inequalities_), SDG13 (_Climate Action_) and SDG15 (_Life on Land_).

The devloped application is called Digital EMpowerment for Efficient TERrain management (DEMETER). We aim to achieve three key objectives by integrating essential functions that support sustainable and smart farming through a seamless, user-friendly interface. Built using the Django Framework, the system provides six distinct functionalities within this web application:

### Main Aims
- To develop a comprehensive agricultural dashboard leveraging Agricultural IoT data, machine learning, and language models to enhance decision-making in sustainable agriculture.
- To promote sustainable agricultural practices and consumption patterns by providing actionable insights into crop suitability, yield prediction, and carbon footprint awareness.
- To empower local farmers and communities by fostering collaboration through a marketplace app that encourages the use of local, seasonal produce and promotes environmental sustainability. 

### Six Functionalities
1. Crop Recommondation
2. Partner Cropping for Fertilizer Reduction
3. Yield Prediction
4. Community Market
5. Plowpal for Agriculture (Intelligent Chatbot)
6. Carbon Footprint Library

Users can refer to the Powerpoint slides for detailed introduction and demonstration.


-------------------------------------------------------------------------------------------------------------------------------------------------------
#### The breakdown functionalities matching the evalutation criteria are listed below:
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th>Name of the Functions</th>
      <th>Functionalities</th>
      <th>Categories</th>
      <th>Involved features matched the criteria</th>
      <th>Tasked improved and amended after the counselling meeting</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Crop Recommendations</td>
      <td><br>• Identifies the best crop to cultivate based on specific environmental and soil parameters by leveraging a LightGBM algorithm<br><br>• System inputs include Nitrogen, Phosphorus, Potassium, Temperature, Humidity, Rainfall and Soil PH<br><br>• Outputs a specific crop that is best suited for the environmental parameters</td>
      <td>Feasibility, Implementation and Verification, Innovation, Social Impact</td>
      <td><br>• Feasibility: users are able to input their defined parameters to retrieve real-time recommendations, and this is also integrated in the Django framework<br>• Innovation: The LightGBM algorithm is employed in the analysis to give out recommendations with good accuracy.<br>• Social Impact: an integrated agricultural dashboard is provided <br>• Implementation and Verification: The models are all pretrained and verified with high accuracy to give out the best recommendations to the local farmers</td>
      <td></td>
    </tr>
    <tr>
      <td>Partner Cropping for Sustainable Agriculture<br></td>
      <td><br>• Supports farmers in selecting the best companion crops for a chosen primary. <br><br>• By recommending compatible crops, the system aids in optimizing crop yields, reducing pest populations naturally, and enhancing soil quality through sustainable agricultural practices.<br>• Integrates SQL query functionality within the crop recommendation dashboard</td>
      <td>Feasibility, Innovation, Social Impact</td>
      <td><br>• Feasibility: users are able to input their defined parameters to retrieve real-time recommendations, and this is also integrated in the Django framework<br>• Innovation: The idea of giving information for partner cropping is innovative, which can also help to optimise the crop yields to foster the concept of sustainable agriculture.<br>• Social Impact: The provided information on partner cropping serves as an education tool to teach beginner farmers how to grow'smartly’ with the use of compatible crops, which can also benefit growing efficiency and prevent additional costs on pesticides and fertilisers. Futher works can be applied to the recommendation at the ‘community gardens’ scale.</td>
      <td></td>
    </tr>
    <tr>
      <td>Yield Prediction</td>
      <td><br>• Provides end users with accessible, accurate and adaptable crop yield predictions <br>• Facilitates real time yield forecasting, scenario planning, historical performance analysis and data integration.<br>• <br>• Predictions are based on localised, regional and crop specific Random Forest models</td>
      <td>Feasibility, Implementation and Verification, Innovation, Social Impact</td>
      <td><br>• Feasibility: users are able to input their defined parameters to retrieve real-time recommendations, and this is also integrated in the Django framework<br>• Innovation: This function gives accessible predictions for the users, which helps to <br>• Social Impact: As most predictions require high-expense costs to predict the yield prediction. This function enables new farmers to simply predict the amount and balance the profit and cost before they start growing. <br>• Implementation and Verification: The models are all pretrained and verified with high accuracy to give out the best recommendations to the local farmers, based on the local models.</td>
      <td>During the counselling period, we received suggestions to adapt the solution that can better match the ‘local-scale’ implementation. Based on this recommendation, models are trained separately in different regions in order to give out recommendations that can match local needs and conditions.</td>
    </tr>
    <tr>
      <td>Community Market</td>
      <td><br>• Operates as a platform to empower local producers to create and manage community shops.<br>• <br>• Encourages people to buy local. Supporting local businesses and uplifting neighborhood economies.<br>• <br>• Includes a “What’s In Season” feature to connect local ingredients with a community recipe database.<br>• Promoting seasonable, sustainable eating<br>• Supporting local industry and economics<br>• Reducing the need for imported goods through behavioral change</td>
      <td>Feasibility, Implementation and Verification, Innovation, Social Impact</td>
      <td><br>• Feasibility: users and providers are able to access this function from the backend and front-end side, which is also feasible to enrich the exexisting database<br>• Innovation: This function fills in the gap of the provision and demanding side lacking a good communication platform to know what is required at the community scale.<br>• Social Impact: As both providers and customers are able to access this function, this can help to promote local industry and create a sustainable supply chain at the community scale. Overall, this can perhaps change customer’s grocery shopping habits if they know there are ingredients provided nearby, which can further support local farming industries and prevent additional transportation carbon footprints.<br>• Implementation and Verification:  This function has been tested from the server and client side to ensure the feasibility</td>
      <td></td>
    </tr>
    <tr>
      <td>PlowPal for Agriculture (Intelligent Chatbot)<br></td>
      <td><br>• PlowPal operates as an intelligent chatbot that seamlessly integrates academic research with real-world agricultural practices.<br>• Designed to support farmers and agricultural producers. It offers real-time, actionable advice across all stages of the farming process. <br>• This user-friendly, interactive system empowers users by translating complex scientific insights and industry expertise into practical, on-the-ground solutions using an LLM augmented RAG model.</td>
      <td>Feasibility, Implementation and Verification, Innovation, Social Impact</td>
      <td><br>• Feasibility: users are able to input their defined parameters to retrieve real-time responses and this is also integrated in the Django framework<br>• Innovation: The LLM Augemented RAG model employed in to give out real-time response based on the given/trained data sets.<br>• Social Impact: As the farmers can recieve real-time responses, this can bridge the knowledge gap and make them feel more engaged in the growing process, in the meantime also serve as a knowledge empowerment platform to provide more pratical solutions.<br>• Implementation and Verification:   The generated response are pre-trained with high accuracy to assure the correct information before provision.</td>
      <td></td>
    </tr>
    <tr>
      <td>Carbon Footprint Library<br></td>
      <td><br>• Integrates carbon footprint data from global and local databases.<br>• <br>• Includes an easy search tool to look up the CO2 emission amount at each agriculture stage <br>• Includes annual record of food GHG emissions across multiple countries, based on the European Union’s published data.<br></td>
      <td>Feasibility, Innovation, Social Impact</td>
      <td><br>• Feasibility: users are able to lookup carbon footprint based on simple selection of the drop-down menu and this is also integrated in the Django framework<br>• Innovation: This library collects carbon footprint information from various international databases, which fills up the gaps and shortage of the current domestic database of agricultural footprints.<br>• Social Impact: an integrated library of different carbon footprints are produced at various stage, which can be considered as good education tools for local farmers <br></td>
      <td>During the counselling period, we received recommendations that the complexity of the dashboard may be too difficult for old farmers to query information. Therefore, instead of making a lot of drop-down menus, we keep it simple in the information display to better guide local farmers in the uses.</td>
    </tr>
  </tbody>
</table>

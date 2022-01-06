// TODO: Convert to a module

var groundhogTitle = `
<table>
  <tr>
    <td colspan="2"><p><span style="text-align: center; font-size: calc(1em + 70%); width: 100%;">PARASOL Corporation</span></p></td>
  </tr>
  <tr>
    <td style="text-align:left;"><img style="display:block;" src="images/parasol-logo.png" alt="PARASOL Corp Logo"/></td>
    <td style="width:220px"><p>Welcome to the Groundhog City infection simulation application.</p>
      <p style="color:red;">Restricted access.</p>
      <p>PARASOL Corp staff only.</p>
      <p>Close window to begin simulation<img style='display:inline;' src='images/animated-elipsis.gif'/></p>
    </td>
  </tr>
</table>
`;

var groundhogInstructions = `
<p>PARASOL Corp has been tasked with the creation of biological vectors that can transmit genetic modifications
through harmless infections to other animals as a means of changing the genetic traits into populations.  Based upon
recent success with small animals such as squirrels and groundhogs, this application was created to help technicians
investigate possible infection potency and mortality parameters to try to achieve optimum genetic trait dispersion.</p>
<p>This application allows technicians to run simulated outbreak scenarios with a reasonable range of control over the
possible behavioral variation of the infection.</p>
<p>To run the simulation:</p>
<ol>
  <li>Set the outbreak parameters using the sliders in the Simulation Settings panel</li>
  <li>Click on individual buildings to indicate where infections should start (building will turn red)</li>
  <li>Click again on a building to clear the initial infection (bulding will turn blue)</li>
  <li>Push the play button <img style="display:inline;height:15px;width:15px;" src="images/play-red.png"/> when all start positions are selected</li>
</ol>
<p>Optional controls:</p>
<ul>
  <li>Use the mouse to pan and zoom around the scene</li>
  <li>Use Pause <img style="display:inline;height:15px;width:15px;" src="images/pause-red.png"/> and Step-Once <img style="display:inline;height:15px;width:15px;" src="images/play-step-red.png"/> to control the simulation</li>
  <li>Use Stop <img style="display:inline;height:15px;width:15px;" src="images/stop-red.png"/> to end the simulation</li>
  <li>Use Rewind <img style="display:inline;height:15px;width:15px;" src="images/rewind-red.png"/> to reset the simulation and keep the last set of seeds</li>
  <li>Use Rewind All <img style="display:inline;height:15px;width:15px;" src="images/full-rewind-red.png"/> to reset the simulation and clear the seeds</li>
</ul>
`;

var groundhogAbout = `
<p>This demonstration app was created to explore querying scene layers, performing
client-side geometry calculations, and creating a complex app workflow with the
<a href="https://developers.arcgis.com/javascript/" target="_blank" alt="ArcGIS API for JavaScript">ArcGIS API for JavaScript</a>.</p>
<p>The original concept for the demo was adapting <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" alt="The Game of Life on wikipedia">Conway's The Game of Life</a> to a geospatial
context and problem set.</p>
<p>Acknowledgements:</p>
<ul>
  <li>Building data modified from <a href="https://www.cob.org/services/maps" alt="City of Bellingham WA GIS" target="_blank">City
   of Bellingham GIS open data</a>. Used without permission and no endorsement of this application by COB should be or is implied.</li>
  <li>Skull icon from <a href="https://www.freeiconspng.com" target="_blank">https://www.freeiconspng.com</a></li>
  <li>Parody of Capcom's Resident Evil for fun.  Resident Evil is &copy;CAPCOM CO., LTD. 2017 ALL RIGHTS RESERVED.</li>
</ul>
<p>Developer notes:</p>
<ul>
  <li>Asynch/Await are currently currently used to synchronize simulation logic for the purposes of simplified development.
  This reduces interactivity and may be converted back to a promise.then and promise.all architecture to increase
  interactivity while the simulation is running.</li>
  <li>Initial seed placement can dramatically impact query times.  A few seeds placed close together may generate 20 iterations in
  5 minutes, but the same number of seeds spread across the city may end up with 5 minute-per iteration times.</li>
  <li>There are a lot of potential todo items, including creating a leaderboard, implementing a more sophisticated
  system including with a reinfection rate, and implementing a better mobile UX. We'll see...</li>
  <li>For questions, contact candrews (at) esri (dot) com or &commat;_ChrisJAndrews</li>
</ul>
`;

var groundhogScenarios = `
TBD...
`;

var groundhogReport = `
Run a simulation to generate a report.
`;

# Magnetic spectroscopy for inspection of metal structures (PhD work)

During my time as a PhD candidate at the [Department of Electrical and Computer Engineering](https://www.ece.iastate.edu/) at Iowa State University, and under the supervision of [Prof David C. Jiles](https://www.ece.iastate.edu/profiles/david-c-jiles/),  I worked on the topic of magnetic non-destructive evaluation, and for my [doctoral work](https://www.researchgate.net/profile/Orfeas-Kypris/publication/324031073_Detection_of_sub-surface_stresses_in_ferromagnetic_materials_using_a_new_Barkhausen_noise_method/links/5aba1c67aca2722b97d189c5/Detection-of-sub-surface-stresses-in-ferromagnetic-materials-using-a-new-Barkhausen-noise-method.pdf) I developed a method for calculating stress as a function of depth in ferromagnetic structures.

>For a concise presentation of this material, please click [here](https://www.researchgate.net/profile/Orfeas-Kypris/project/Stress-depth-profiling-of-ferromagnetic-materials-using-a-frequency-domain-Barkhausen-noise-model/attachment/6267ddaaaaa86b722b94d27f/AS:1149082907213824@1650974122246/download/barkhausen.pdf?context=ProjectUpdatesLog).

>My work, termed the **Kypris-Jiles** model, was evaluated and corroborated by independent researchers. More information [here](https://www.researchgate.net/publication/322567501_Quantitative_estimation_of_nonmonotonic_residual_stress_depth-profiles_using_an_extended_Kypris-Jiles_model_of_the_magnetic_Barkhausen_noise_spectrum).  

My doctoral work was interdisciplinary and ranged from theory to experiment. For the theoretical part I carried out some analytical and numerical modeling, and for the experimental part I designed and implemented a sensor, a measurement system and a library of signal processing tools for the processing and visualization of magnetic Barkhausen signals.

For my doctoral thesis work I developed integral equations to describe the attenuation of electromagnetic signals through absorbing media. When a ferromagnetic material is excited by an external magnetic field, it responds by emitting a magnetic noise, as a result of the reordering of magnetic domains within it. This noise is termed Barkhausen noise, and contains information about the microstructure and stress state of the material. It is desirable to know the amplitude of the noise at different depths within the material (for example, the sample on the left). For the purposes of the model, we assume that the frequency spectrum where the noise originates resembles that of white noise. As this noise propagates towards the surface, it becomes attenuated, with the higher frequencies experiencing more attenuation.

We can denote this noise at the origin as V of sigma, where V is the voltage induced in an imaginary coil placed at the origin, and sigma is stress. The noise arriving at the measuring coil, can be denoted by V_meas, and is an integral along depth, such that all individual emissions from the surface to depth x1 are taken into account. The exponential term within the integral denotes attenuation. This eventually permits solving for V as a function of x_1, to see how voltage (and consequently, stress) vary with depth.

Part of the solving this problem involves knowing how the material under examination is magnetized by the applied field. To visualize and optimize that, I carried out a number of finite element simulations in COMSOL multiphysics. These were frequency domain, steady state simulations, done using the AC/DC module in COMSOL. I parametrized the simulations to account for different excitation currents, number of turns, and different electromagnet and sample geometries. The idea here was to direct the field as much as possible, in order to achieve uniform excitation within the sample.

As part of this project, I also designed and implemented a measurement system, which can acquire, output, process and visualize magnetic Barkhausen signals. On the software side, I used a combination of Matlab and Labview. Labview was employed for the hardware interfacing and MATLAB was used to perform the signal processing.

On the next slide, you can see the connection diagram for that system. The sensor is on the top, within the grey circle. It is capable of applying a magnetic field through the main electromagnet yoke and simultaneously measuring the response of the sample under test through the coil in the middle.

As part of this project, I had to apply stress to samples and measure their Barkhausen response. However, I had to induce a certain type of stress distribution, which can only be obtained by bending the sample. To do this, I had to build my own device. I designed this four-point bending device in CAD software and then had it machined out of high-strength aluminium.

In order to facilitate the analysis of the large datasets that I measured, I had to code a MATLAB library. I wrote two main classes that I used extensively. One was created to store and operate on a single Barkhausen waveform, and the other one was created to operate on a multitude of signals simultanously, in order to facilitate arranging an experiment, where I wanted to determine variation of a state variable, in response to a change in the control variable.

The classes can extract statistical parameters from the Barkhausen signals, such as envelope, time- average power, total energy, and pulse height distribution among others. They can also be used for calcualtion of the fourier transform, autocorrelation function and power spectral density. They can be used to perform operations on them, such as FIR filtering.

One important function was the optimization routines that I used to extract stress as a function of depth.

## Awards

During my PhD, I received numerous awards: Iowa State University Research Excellence Award, Takano PhD Fellowship (Iowa State Univ.), Appointed member of IEEE-Eta Kappa Nu for outstanding academic achievements, Best Student Poster Presentation Award (56th Conference on Magnetism and Magnetic Materials), IEEE Magnetics Summer School Attendee (sponsored), American Physical Society FGSA Travel Award for Excellence in Graduate Research, IEEE Travel Grant

## Selected publications

- [Orfeas Kypris, IC Nlebedim, DC Jiles. Measuring stress variation with depth using Barkhausen signals](https://www.sciencedirect.com/science/article/abs/pii/S0304885316300725)
- [Orfeas Kypris, IC Nlebedim, DC Jiles. Experimental Verification of the Linear Relationship Between Stress and
the Reciprocal of the Peak Barkhausen Voltage in ASTM A36 Steel](https://www.researchgate.net/profile/Orfeas-Kypris/publication/260189038_Experimental_Verification_of_the_Linear_Relationship_Between_Stress_and_the_Reciprocal_of_the_Peak_Barkhausen_Voltage_in_ASTM_A36_Steel/links/54f879eb0cf2ccffe9df389c/Experimental-Verification-of-the-Linear-Relationship-Between-Stress-and-the-Reciprocal-of-the-Peak-Barkhausen-Voltage-in-ASTM-A36-Steel.pdf)
- [Orfeas Kypris, IC Nlebedim, David C Jiles. A model for the Barkhausen frequency spectrum as a function of applied stress](https://www.researchgate.net/profile/Orfeas-Kypris/publication/260417426_A_model_for_the_Barkhausen_frequency_spectrum_as_a_function_of_applied_stress/links/5419b3f40cf2218008bf9cb3/A-model-for-the-Barkhausen-frequency-spectrum-as-a-function-of-applied-stress.pdf)

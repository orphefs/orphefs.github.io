# Structalyse: High-precision and low-cost monitoring of civil assets

In my research at the [Department of Computer Science, University of Oxford](https://www.cs.ox.ac.uk/research/cyberphysical/), I developed a new method for the structural health monitoring of civil structures, which aims to revolutionize the way in which concrete structures are monitored. The concept is to embed sensors in concrete itself, monitoring structural stress and deformations from within the concrete matrix in real-time. This is possible because the sensors use low-frequency magnetic fields to measure their relative displacement from one another, and keep track of them over time. Low-frequency magnetic fields can be used to communicate, track 3-D displacement, and power the sensor network, even in the presence of solid and liquid media.

My research was crucial in providing early warning of impending failure, informing repair operations and optimizing building methods. It can be used as part of an early warning system for extreme weather and natural disasters, which have become increasingly frequent because of climate change.

I actively lead this project: I simulated, designed, and physically implemented the technology around these sensors, publishing in top-tier journals in the field, conducting public outreach through conference talks, and [podcasts](https://www.oxfordsparks.ox.ac.uk/scientists/orfeas-kypris/).

## Current techniques don’t measure up…

At present, the techniques used to monitor 3D displacements within solid structures rely on the properties of the adjoining media. For example, capacitive and inductive methods rely heavily on the moisture content of the material and also generally only provide data on linear displacements. Radio-frequency identification (RFID) technology has also been used, but due to the high operating frequency the device could not be embedded in the concrete. Optical methods such as camera-based displacement measurement, infrared and laser methods require line-of-sight, and use sensitive and expensive subsystems. Furthermore, tracking slow displacements using accelerometers is impossible due to issues of drift. All of the above issues are non-existent with the MagniGap® techology, which can measure slow displacements, in 3-D, at low cost, wirelessly, and from within concrete.

## Benefits of the technology

The technology is low-cost, as it uses off-the-shelf components for its operation. The sensor does not use any moving parts, nor does it use line-of-sight technology to measure displacement. It uses low-frequency magnetic fields, which can penetrate solid media such as cement, soil, rock, and even water. This makes the technology truly versatile, as the sensor can be embedded in concrete, making it very resilient to harsh environments. As the sensor does not have any moving parts and can be enclosed in a hermetically sealed case, it is very resilient to high vibrations, and harsh environments in general. The sensor consumes very little power and can thus be powered through a solar panel. In conjunction with a battery, the sensor lifetime can be prolonged to years, making the sensor truly autonomous. The unique advantage of the sensor is that it does not rely on acceleration measurements to compute displacements, but rather measures displacement directly. This gives it an advantage in measuring slow displacements over time, in 3-D. The main benefits of this new system are as follows:

- Sensor is contactless, non line-of-sight and wireless
- Performance is unaffected by the presence of dielectric material
- Can be embedded into manufactured concrete
- May be set up on existing structures with minimal effort
- Measures displacement in 3-dimensions to within 0.5 mm over a cube of side 60 mm (this figure is currently being improved)

## Current state of the technology

At this moment, the technology is at TRL 4. We can currently obtain sub-millimeter accuracy, in 3-D, over a distance of 60 mm, and working towards improving that figure. Vibrations can be recorded up to a few kHz. Also, we are currently working on implementing wireless communications that will enable the remote transfer of data from sensor node to central server, where machine learning algorithms will calculate reliable condition indicators.

## Patent protection

A [patent](https://patents.google.com/patent/WO2018060700A1) has been filed in the UK and Greece which covers this technology.

## Related Publications

- [Orfeas Kypris, Andrew Markham. 3-D displacement measurement for structural health monitoring using low-frequency magnetic fields](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7797212)
- [Zhihua Wang, Orfeas Kypris, Andrew Markham. RePWR: wireless power transfer within reinforced concrete](https://ora.ox.ac.uk/objects/uuid:26cd096d-82ea-4e33-9dd4-9e0af2343239/download_file?safe_filename=Wang%2Bet%2Bal%252C%2BRePWR%2B-%2BWireless%2Bpower%2Btransfer%2Bwithin%2Breinforced%2Bconcrete.pdf&file_format=application%2Fpdf&type_of_work=Conference+item)
- [Traian E Abrudan, Orfeas Kypris, Niki Trigoni, Andrew Markham. Impact of rocks and minerals on underground magneto-inductive communication and localization](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7529052)

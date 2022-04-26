# RoboWeldAR

At [iKnowHow](https://www.iknowhow.com/), I was the founder and technical lead of the RoboWeldAR project ( [video showcase](https://youtu.be/8IxrSFlvBY4),  [tutorial](https://youtu.be/zPShBs7qK9s),  [open-sourced code](https://github.com/ikh-innovation/roboweldar-rose-ap) ), whose aim is to produce a 3D-reconstructed model of a welding target (using a combination of robotics and photogrammetry), and superimpose on it potential welding paths. The code is open-source, and encapsulates a containerized, microservice-based architecture that takes in photos of the target object as well as the camera poses in the world frame, and outputs a 3D model of the object along with potential weld seam candidates. Achievements:

- **Led a team** of 5 software engineers and data scientists,
- Solved **optimization problems** using Python (scipy) to achieve spatial alignment of generated 3D model with real target,
- Architected a collection of **containerized microservices** running on the cloud (Docker, Dockerhub, Github actions),

   1. Photogrammetry service (using Python and AliceVision Meshroom API)
   2. Deep learning for 3D object detection (using Facebook's Votenet architecture)
   3. Robotic control using ROS
   4. Created [dashboard](https://youtu.be/Rwq6crbS7TI) using Grafana and FiWARE IoT platform.

- Achieved robotic welding accuracy of ~8 mm.

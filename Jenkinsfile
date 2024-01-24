pipeline{
    agent any
    stages{
        stage("FetchingCode"){
            steps{
                git url: "https://github.com/Anshuman021/Node_Weather_App.git", branch: "main"
                echo 'Git Code Fetched Successfully'
            }
        }
        stage("LoginToDHub"){
            steps{
                withCredentials([usernamePassword(credentialsId:"hub_creds", usernameVariable:"username", passwordVariable:"pwd")]){
                    sh "docker login -u ${env.username} -p ${env.pwd}"
                }
            }
        }
        stage("BuildingImage"){
            steps{
                sh "docker build -t anshumanhub/node-app:v ."
            }
        }
        stage("PushingToDHub"){
            steps{
                sh "docker push anshumanhub/node-app:v"
            }
        }
        stage("Deployed"){
            steps{
                sh "docker compose down --volumes && docker compose up -d"
            }
        }
    }
}
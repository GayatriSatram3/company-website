pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'sudo docker build -t company-website:v2 .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                sudo docker stop company-website-container || true
                sudo docker rm company-website-container || true
                '''
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'sudo docker run -d --name company-website-container -p 8081:80 company-website:v2'
            }
        }
    }
}
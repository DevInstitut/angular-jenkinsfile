pipeline {
    agent any
    triggers { pollSCM('* * * * *') }
    stages {
        stage('install') {
          steps {
              sh 'npm install'
          }
        }
        stage('build') {
          steps {
              sh 'npm run build'
          }
        }
        stage('deploy') {
          steps {
              sh 'npm run deploy'
          }
        }
    }
    post {
        success {
           slackSend channel: '#jenkins_nantes', color: 'good', message: "Succès ! ${env.JOB_NAME} COMMIT ${env.GIT_COMMIT} (<${env.BUILD_URL}|Open>)"
        }
        failure {
            slackSend channel: '#jenkins_nantes', color: 'danger', message: "Oops ! ${env.JOB_NAME} COMMIT ${env.GIT_COMMIT} (<${env.BUILD_URL}|Open>)"
        }
    }
}

pipeline {
    agent any
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
         when {
              branch 'master'
         }
         steps {
              sh 'npm run deploy'
         }
       }
    }
    post {
        success {
           slackSend channel: '#jenkins_nantes', color: 'good', message: "Succès ! ${env.JOB_NAME} commit ${env.GIT_COMMIT} https://${GH_ORG}.github.io/${ABSENCES_FRONT_REPO}/"
        }
        failure {
            slackSend channel: '#jenkins_nantes', color: 'danger', message: "Oops ! ${env.JOB_NAME} commit ${env.GIT_COMMIT} (<${env.BUILD_URL}|Open>)"
        }
    }
}

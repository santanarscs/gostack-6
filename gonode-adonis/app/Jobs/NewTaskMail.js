'use strict'
const Mail = use('Mail')
const Helpers = use('Helpers')
class NewTaskMail {
  static get concurrency () {
    return 1
  }

  static get key () {
    return 'NewTaskMail-job'
  }

  async handle ({ username, title, file, email }) {
    console.log(`Job: ${NewTaskMail.key}`)
    await Mail.send(
      ['emails.new_task'],
      {
        username,
        title,
        hasAttachment: !!file
      },
      message => {
        message
          .to(email)
          .from('raphaelstn@gmail.com', 'Raphael Santana')
          .subject('Nova tarefa para você')
        if (file) {
          message.attach(Helpers.tmpPath(`uploadas/${file.file}`), {
            filename: file.name
          })
        }
      }
    )
  }
}

module.exports = NewTaskMail

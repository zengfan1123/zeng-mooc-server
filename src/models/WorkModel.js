const mongoose = require('../db/mongoose.js')
const WorkSchema = mongoose.Schema(
  /**  */
  {
    title: String,
    components: [Object],
    props: Object,
    setting: Object,
  },
  { timestamps: true }
)
const WorkModel = mongoose.model('Work', WorkSchema)
module.exports = { WorkModel }

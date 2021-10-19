const mongoose = require("mongoose");

const DistrictSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: (v) =>
      /^[a-z0-9A-Z\sÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]*$/.test(
        v
      ),
    set: (v) => v.toLowerCase(),
    get: (v) => v.toLowerCase(),
  },
});

module.exports = mongoose.model("districts", DistrictSchema);

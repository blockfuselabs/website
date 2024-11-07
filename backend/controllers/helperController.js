const { getAllCountries } = require('../helpers');

class HelperController {

    
  static async getCountries(req, res) {
    try {
        const countries = getAllCountries();

        res.status(200).json({
            message: 'Countries retrieved successfully.',
            countries}
        );

    } catch (error) {

      console.error('Error:', error);

      res.status(500).json({
        error: 'Unable to retrieve countries.',
        details: error.message
      });
    }
  }
}

module.exports = HelperController;

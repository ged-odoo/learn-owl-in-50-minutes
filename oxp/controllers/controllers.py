from odoo import http
from odoo.http import request, route

class OxpPage(http.Controller):
    @http.route(['/oxp'], type='http', auth='public')
    def show_demo_page(self):
        """
        Renders the oxp demo page
        """
        return request.render('oxp.page')

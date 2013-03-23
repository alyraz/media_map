class MasterController < ApplicationController
  COUNTRY_CODES = ["US", "IN", "AR", "AU", "BE",
                   "BR", "CA", "CL", "CO", "CZ",
                   "EG", "FR", "DE", "GB", "HK",
                   "HU", "IE", "IL", "IT", "JP",
                   "JO", "MY", "MX", "MA", "NL",
                   "NZ", "PE", "PH", "PL", "RU",
                   "SA", "SG", "ZA", "KR", "ES",
                   "SE", "TW", "AE"]
  def index
    code = params[:country_code].upcase! if params.include? :country_code

    if COUNTRY_CODES.include? code
      @country_code = code
    end
  end
end

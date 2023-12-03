import PhonePePaymentSDK from 'react-native-phonepe-pg' 
 /**
   * This method is used to initiate PhonePe Payment sdk.
   * Provide all the information as requested by the method signature.
   * Params:
   *    - environment: This signified the environment required for the payment sdk
   *      possible values: UAT, UAT_SIM, PRODUCTION
   *      if any unknown value is provided, PRODUCTION will be considered as default.
   *    - merchantId: The merchant id provided by PhonePe  at the time of onboarding.
   *    - appId: The appId provided by PhonePe at the time of onboarding.
   *    - enableLogging: If you want to enabled / visualize sdk log
   *        - enabled = YES
   *        - disable = NO
   *    
   *    - Return: Boolean (TRUE -> SUCCESS).
   *        - SUCCESS: TRUE
   *        - FAILURE: FALSE
   *            - in iOS = False (if AppID missing:-Please provide PhonePe AppId)
   *            - in Android = Error in case of invalid arguments ex: "Invalid environment or merchantId!"
   */

  PhonePePaymentSDK.init(
		"UAT",
    merchantId,
    appId,
    isDebuggingEnabled
  	).then(result => {
  	// handle promise
	})
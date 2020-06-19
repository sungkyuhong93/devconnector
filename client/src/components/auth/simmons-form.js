<Form
  formId={`5ed94e758a65820014ca1cd2`}
  orgId={`5ec3fdcd4751e60019e06023`}
  title={`Contact Us`}
  postUrl={`https://api.kustomerapp.com/v1/hooks/form/5ec3fdcd4751e60019e06023/39bb7a341710734bef8f4241c77033944ae8ce8167b72e7a004488eb11f38bcc`}
  successMessage={`Your submission was successfully sent.`}
  errorMessage={`Your submission was not successful.`}
  submitButtonText={`Submit`}
  loadingText={`Submitting Form`}
  recaptcha={false}
  deflection={false}
  formHookEnabled={true}
  orgName={`sertasimmons`}
>
  <Row className="">
    <Column className="">
      <div className="sk-form-flex">
        <FieldInput
          hint={``}
          placeholder={` `}
          type={`string`}
          label={`First Name`}
          name={`customerName`}
          id={`customerName`}
          description={``}
          className={`sk-input`}
          required={true}
          updateAttribute={true}
          attributeType={`customer`}
          attributeProperty={`name`}
          isCustomAttribute={false}
          orgName={`sertasimmons`}
        />
        <FieldInput
          hint={``}
          placeholder={` `}
          type={`string`}
          label={`Last Name`}
          name={`customerLastName`}
          id={`customerLastName`}
          description={``}
          className={`sk-input`}
          required={true}
          updateAttribute={true}
          attributeType={`customer`}
          attributeProperty={`name`}
          isCustomAttribute={false}
          orgName={`sertasimmons`}
        />
      </div>

      <div className="sk-form-flex">
        <FieldInput
          hint={``}
          placeholder={``}
          type={`email`}
          label={`Email`}
          name={`customerEmail`}
          id={`customerEmail`}
          description={``}
          className={``}
          required={true}
          updateAttribute={true}
          attributeProperty={`emails`}
          attributeType={`customer`}
          isCustomAttribute={false}
          orgName={`sertasimmons`}
        />

        <FieldDropdown
          id={`select`}
          displayName={`Dropdown`}
          type={`select`}
          value={`Example Placeholder`}
          label={`What is the reason for your message?`}
          name={`dropdown`}
          hint={``}
          placeholder={``}
          description={``}
          className={``}
          options={[
            {
              label: "Requesting information about Simmons products",
              value: "Requesting information about Simmons products",
              id: "requesting-information-about-simmons-products",
            },
            {
              label: "Requesting information about Simmons promotions",
              value: "Requesting information about Simmons promotions",
              id: "requesting-information-about-simmons-promotions",
            },
            {
              label: "Interested in doing business with Simmons",
              value: "Interested in doing business with Simmons",
              id: "interested-in-doing-business-with-simmons",
            },
            {
              label: "Inquiry or comments about a Simmons retailer",
              value: "Inquiry or comments about a Simmons retailer",
              id: "inquiry-or-comments-about-a-simmons-retailer",
            },
            {
              label: "Other inquiries",
              value: "Other inquiries",
              id: "other-inquiries",
            },
          ]}
          required={true}
        />
      </div>

      <FieldText
        hint={``}
        placeholder={``}
        type={`text`}
        label={`How can we help?`}
        name={`messagePreview`}
        id={`messagePreview`}
        description={``}
        className={``}
        required={true}
        updateAttribute={true}
        attributeProperty={`preview`}
        attributeType={`message`}
        isCustomAttribute={false}
      />
    </Column>
  </Row>
</Form>;

# QRCode Node Project

## Description

The "QRCode Node" project is a utility kit for e-commerce platforms that enables the generation of QR codes and random passwords. It is developed using Node.js and utilizes popular libraries such as `chalk`, `prompt`, and `qrcode-terminal` to facilitate user interaction via the command line.

## Features

This project offers the following features:

1. **QR Code Generation**: Generates QR codes based on user input.
2. **Random Password Generation**: Creates secure and random passwords based on user-defined criteria.

## File Structure

The basic file structure of the project is as follows:

## Dependencies

The main dependencies used in this project are:

- **[chalk](https://www.npmjs.com/package/chalk)**: For styling terminal output with colors.
- **[prompt](https://www.npmjs.com/package/prompt)**: For interacting with the user via the command line.
- **[qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal)**: For generating QR codes directly in the terminal.

## Running the Project

1. **Install Dependencies**

   Run the following command to install project dependencies:

   ```bash
   npm install
   ```

2. **Configure Environment Variables**

   Create a `.env` file in the root directory and define any necessary environment variables.

3. **Start the Project**

   Run the following command to start the project:

   ```bash
   npm start
   ```

4. **Use the Project**

   Once the project starts, you will see a prompt asking you to choose one of the functionalities:
   - **QR Code Generation**: Choose option 1.
   - **Random Password Generation**: Choose option 2.

## Contributing

Feel free to open issues or submit pull requests to contribute improvements to this project.

## License

This project is licensed under the [ISC License](LICENSE).

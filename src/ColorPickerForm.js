import React, { Component } from 'react';
import { ChromePicker } from 'react-color'
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'


class ColorPickerForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentColor: "teal",
            newColorName: ""
        }
        this.updateCurrentColor = this.updateCurrentColor.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
            return this.props.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        })

        ValidatorForm.addValidationRule("isColorUnique", (value) => {
            return this.props.colors.every(
                ({ color }) => color !== this.state.currentColor
            )
        });
    }

    handleSubmit() {
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        }
        this.props.addNewColor(newColor)
        this.setState({ newColorName: "" })
    }

    updateCurrentColor(newColor) {
        this.setState({ currentColor: newColor.hex })
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        const { paletteIsFull } = this.props.paletteIsFull;
        const { currentColor, newColorName } = this.state;
        return (
            <div>
                <ChromePicker
                    color={currentColor}
                    onChangeComplete={this.updateCurrentColor}
                />
                <ValidatorForm onSubmit={this.handleSubmit}>
                    <TextValidator
                        value={newColorName}
                        onChange={this.handleChange}
                        name="newColorName"
                        validators={['required', 'isColorNameUnique', 'isColorUnique']}
                        errorMessages={['enter a color name', 'color name must be unique', 'color already used']}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ background: paletteIsFull ? "grey" : this.state.currentColor }}
                        type='submit'
                        disabled={paletteIsFull}
                    >
                        {paletteIsFull ? 'Palette Full' : "Add Color"}
                    </Button>
                </ValidatorForm>
            </div>
        );
    }
}

export default ColorPickerForm;
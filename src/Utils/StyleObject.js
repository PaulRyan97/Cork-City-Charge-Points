/**
 * Created by Paul on 04/08/2019.
 */
// @flow

class StyleObject
{
    style: Object;

    constructor()
    {
        this.style =
        {
            fontFamily: "roboto"
        }
    }

    setWidth(width: string | number)
    {
        this.style.width = width;
        return this;
    }

    setHeight(height: string | number)
    {
        this.style.height = height;
        return this;
    }

    setDisplay(display: string)
    {
        this.style.display = display;
        return this;
    }

    setFlexDirection(direction: string)
    {
        this.style.flexDirection = direction;
        return this;
    }

    setFontSize(fontSize: string | number)
    {
        this.style.fontSize = fontSize;
        return this;
    }

    setMargin(margin: string | number)
    {
        this.style.margin = margin;
        return this;
    }

    setBasics(width: string | number, height: string | number, left: string | number, top: string | number)
    {
        this.style.width = width;
        this.style.height = height;
        this.style.left = left;
        this.style.top = top;
        return this;
    }

    setPosition(position: string)
    {
        this.style.position = position;
        return this;
    }

    setTop(top: string | number)
    {
        this.style.top = top;
        return this;
    }

    setBottom(bottom: string | number)
    {
        this.style.bottom = bottom;
        return this;
    }

    setLeft(left: string | number)
    {
        this.style.left = left;
        return this;
    }

    setRight(right: string | number)
    {
        this.style.right = right;
        return this;
    }

    setBorder(border: string)
    {
        this.style.border = border;
        return this;
    }

    setBorderTop(borderTop: string)
    {
        this.style.borderTop = borderTop;
        return this;
    }

    setBoxShadow(boxShadow: string)
    {
        this.style.boxShadow = boxShadow;
        return this;
    }

    getStyle(): Object
    {
        return this.style;
    }
}

export default StyleObject;
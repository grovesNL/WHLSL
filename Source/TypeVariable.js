/*
 * Copyright (C) 2017 Apple Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC. ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 
 */
"use strict";

class TypeVariable extends Type {
    constructor(origin, name, protocol)
    {
        super();
        this._origin = origin;
        this._name = name;
        this._protocol = protocol;
    }
    
    get name() { return this._name; }
    get protocol() { return this._protocol; }
    
    get isPrimitive()
    {
        return this._protocol && this._protocol.isPrimitive;
    }
    
    get isUnifiable() { return true; }
    
    inherits(protocol)
    {
        if (!protocol)
            return true;
        if (!this.protocol)
            return false;
        return this.protocol.inherits(protocol);
    }
    
    typeVariableUnify(unificationContext, other)
    {
        if (!(other instanceof Type))
            return false;
        
        return this._typeVariableUnifyImpl(unificationContext, other);
    }
    
    unifyImpl(unificationContext, other)
    {
        return this.typeVariableUnify(unificationContext, other);
    }
    
    verifyAsArgument(unificationContext)
    {
        let realThis = unificationContext.find(this);
        
        // The thing we get unified with must be a type variable that accepts a broader set of
        // things than we do.
        if (!(realThis instanceof TypeVariable))
            return false;
        
        if (!this.protocol)
            return !realThis.protocol;
        
        return this.protocol.inherits(realThis.protocol);
    }
    
    verifyAsParameter(unificationContext)
    {
        if (!this.protocol)
            return true;
        return unificationContext.find(this).inherits(this.protocol);
    }
    
    toString()
    {
        return this.name + (this.protocol ? ":" + this.protocol.name : "");
    }
}


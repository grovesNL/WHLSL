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

load("Node.js");
load("Type.js");
load("ReferenceType.js");
load("Value.js");
load("Expression.js");
load("Rewriter.js");
load("Visitor.js");

load("AddressSpace.js");
load("ArrayRefType.js");
load("ArrayType.js");
load("Assignment.js");
load("Block.js");
load("BoolLiteral.js");
load("CallAssignment.js");
load("CallExpression.js");
load("CallFunction.js");
load("CastExpression.js");
load("Check.js");
load("CheckLiteralTypes.js");
load("CheckReturns.js");
load("CheckUnreachableCode.js");
load("Checker.js");
load("CommaExpression.js");
load("ConstexprTypeParameter.js");
load("DereferenceExpression.js");
load("DotExpression.js");
load("EArrayRef.js");
load("EBuffer.js");
load("EBufferBuilder.js");
load("EPtr.js");
load("EvaluationCommon.js");
load("Evaluator.js");
load("Field.js");
load("Func.js");
load("FuncDef.js");
load("FuncInstantiator.js");
load("FuncParameter.js");
load("FunctionLikeBlock.js");
load("Inline.js");
load("Inliner.js");
load("InstantiateImmediates.js");
load("IntLiteral.js");
load("IntLiteralType.js");
load("Intrinsics.js");
load("Lexer.js");
load("LexerToken.js");
load("LiteralTypeChecker.js");
load("LogicalNot.js");
load("MakePtrExpression.js");
load("NameContext.js");
load("NameResolver.js");
load("NativeFunc.js");
load("NativeFuncInstance.js");
load("NativeType.js");
load("NativeTypeInstance.js");
load("NullLiteral.js");
load("NullType.js");
load("OverloadResolutionFailure.js");
load("Parse.js");
load("Prepare.js");
load("Program.js");
load("Protocol.js");
load("ProtocolDecl.js");
load("ProtocolFuncDecl.js");
load("ProtocolRef.js");
load("PtrType.js");
load("ResolveNames.js");
load("ResolveOverloadImpl.js");
load("ResolveTypeDefs.js");
load("Return.js");
load("ReturnChecker.js");
load("ReturnException.js");
load("StandardLibraryEpilogue.js");
load("StandardLibraryPrologue.js");
load("StructLayoutBuilder.js");
load("StructType.js");
load("Substitution.js");
load("SuffixCallAssignment.js");
load("TypeDef.js");
load("TypeDefResolver.js");
load("TypeOrVariableRef.js");
load("TypeRef.js");
load("TypeVariable.js");
load("TypedValue.js");
load("UintLiteral.js");
load("UnificationContext.js");
load("UnreachableCodeChecker.js");
load("VariableDecl.js");
load("VariableRef.js");
load("VisitingSet.js");
load("WSyntaxError.js");
load("WTrapError.js");
load("WTypeError.js");
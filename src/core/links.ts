/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as vscode from "vscode";

export const Schemes = {
  http: "http:",
  https: "https:",
  file: "file:",
  untitled: "untitled",
  mailto: "mailto:",
  data: "data:",
  vscode: "vscode:",
  "vscode-insiders": "vscode-insiders:",
};

const knownSchemes = [...Object.values(Schemes), `${vscode.env.uriScheme}:`];

export function getUriForLinkWithKnownExternalScheme(
  link: string
): vscode.Uri | undefined {
  if (knownSchemes.some((knownScheme) => isOfScheme(knownScheme, link))) {
    return vscode.Uri.parse(link);
  }

  return undefined;
}

export function isOfScheme(scheme: string, link: string): boolean {
  return link.toLowerCase().startsWith(scheme);
}

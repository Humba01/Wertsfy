// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef SHELL_BROWSER_EXTENSIONS_API_STREAMS_PRIVATE_STREAMS_PRIVATE_API_H_
#define SHELL_BROWSER_EXTENSIONS_API_STREAMS_PRIVATE_STREAMS_PRIVATE_API_H_

#include <string>

#include "base/macros.h"
#include "third_party/blink/public/mojom/loader/transferrable_url_loader.mojom.h"

namespace extensions {

// TODO(devlin): This is now only used for the MimeTypesHandler API. We should
// rename and move it to make that clear. https://crbug.com/890401.
class StreamsPrivateAPI {
 public:
  // Send the onExecuteMimeTypeHandler event to |extension_id|. If the viewer is
  // being opened in a BrowserPlugin, specify a non-empty |view_id| of the
  // plugin. |embedded| should be set to whether the document is embedded
  // within another document. The |frame_tree_node_id| parameter is used for the
  // top level plugins case. (PDF, etc). If this parameter has a valid value
  // then it overrides the |render_process_id| and |render_frame_id| parameters.
  // The |render_process_id| is the id of the renderer process. The
  // |render_frame_id| is the routing id of the RenderFrameHost.
  //
  // If the network service is not enabled, |stream| is used; otherwise,
  // |transferrable_loader| and |original_url| are used instead.
  static void SendExecuteMimeTypeHandlerEvent(
      const std::string& extension_id,
      const std::string& view_id,
      bool embedded,
      int frame_tree_node_id,
      int render_process_id,
      int render_frame_id,
      blink::mojom::TransferrableURLLoaderPtr transferrable_loader,
      const GURL& original_url);
};

}  // namespace extensions

#endif  // SHELL_BROWSER_EXTENSIONS_API_STREAMS_PRIVATE_STREAMS_PRIVATE_API_H_
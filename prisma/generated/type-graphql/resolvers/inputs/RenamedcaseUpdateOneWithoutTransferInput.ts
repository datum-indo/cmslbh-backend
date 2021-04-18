import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutTransferInput } from "../inputs/RenamedcaseCreateOrConnectWithoutTransferInput";
import { RenamedcaseCreateWithoutTransferInput } from "../inputs/RenamedcaseCreateWithoutTransferInput";
import { RenamedcaseUpdateWithoutTransferInput } from "../inputs/RenamedcaseUpdateWithoutTransferInput";
import { RenamedcaseUpsertWithoutTransferInput } from "../inputs/RenamedcaseUpsertWithoutTransferInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpdateOneWithoutTransferInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutTransferInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutTransferInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutTransferInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutTransferInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpsertWithoutTransferInput, {
    nullable: true
  })
  upsert?: RenamedcaseUpsertWithoutTransferInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: true
  })
  connect?: RenamedcaseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutTransferInput, {
    nullable: true
  })
  update?: RenamedcaseUpdateWithoutTransferInput | undefined;
}

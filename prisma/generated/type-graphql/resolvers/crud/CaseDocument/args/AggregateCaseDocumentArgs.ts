import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseDocumentOrderByInput } from "../../../inputs/CaseDocumentOrderByInput";
import { CaseDocumentWhereInput } from "../../../inputs/CaseDocumentWhereInput";
import { CaseDocumentWhereUniqueInput } from "../../../inputs/CaseDocumentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCaseDocumentArgs {
  @TypeGraphQL.Field(_type => CaseDocumentWhereInput, {
    nullable: true
  })
  where?: CaseDocumentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CaseDocumentOrderByInput], {
    nullable: true
  })
  orderBy?: CaseDocumentOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CaseDocumentWhereUniqueInput, {
    nullable: true
  })
  cursor?: CaseDocumentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
